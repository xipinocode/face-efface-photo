use tauri_plugin_dialog::DialogExt;
use tauri_plugin_opener::OpenerExt;

#[tauri::command]
fn save_image_dialog(handle: tauri::AppHandle, data: Vec<u8>, default_name: String) -> Result<bool, String> {
    let path = handle.dialog().file()
        .set_title("Enregistrer l'image")
        .set_file_name(&default_name)
        .add_filter("JPEG", &["jpg", "jpeg"])
        .add_filter("PNG", &["png"])
        .blocking_save_file();

    match path {
        Some(file_path) => {
            let p = file_path.into_path().map_err(|e| e.to_string())?;
            std::fs::write(&p, &data).map_err(|e| e.to_string())?;
            Ok(true)
        }
        None => Ok(false)
    }
}

#[tauri::command]
fn open_url(handle: tauri::AppHandle, url: String) -> Result<(), String> {
    handle.opener().open_url(url, None::<String>).map_err(|e| e.to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![save_image_dialog, open_url])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
