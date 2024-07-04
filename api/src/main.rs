use axum::{extract::{self}, http::StatusCode, routing::get, Json, Router};
use serde::Serialize;

#[tokio::main]
async fn main() {
    let app = Router::new()
    .route("/Blog/:id", get(get_blog_handler));

    // run it
    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();
    println!("listening on {}", listener.local_addr().unwrap());
    axum::serve(listener, app).await.unwrap();
}

#[derive(Serialize)]
struct Blog {
    id : u64,
    title : String,
    date : String,
}

async fn get_blog_handler(extract::Path(id) : extract::Path<u64>) -> (StatusCode, Json<Blog>) {
    let blog = Blog {
        id : id,
        title : "Hello World".to_owned(),
        date : "2024-07-08".to_owned()
    };

    return (StatusCode::OK, Json(blog));
}
