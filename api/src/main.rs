use axum::{extract::{self}, http::StatusCode, routing::get, Json, Router};
use serde::{Deserialize, Serialize};

#[tokio::main]
async fn main() {
    let app = Router::new()
    .route("/contact", post(contact_handler))
    .route("/Blog/:id", get(get_blog_handler));

    // run it
    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();
    println!("listening on {}", listener.local_addr().unwrap());
    axum::serve(listener, app).await.unwrap();
}

#[derive(Serialize, Deserialize)]
struct Blog {
    id : u64,
    title : String,
    date : String,
}

#[derive(Deserialize)]
struct ContactForm {
    name: String,
    message: String,
}

async fn get_blog_handler(extract::Path(id) : extract::Path<u64>) -> (StatusCode, Json<Blog>) {
    let blog = Blog {
        id : id,

        title : "Hello World".to_owned(),
        date : "2024-07-08".to_owned()
    };

    return (StatusCode::OK, Json(blog));
}

async fn contact_handler(Json(form_data): Json<ContactForm>) -> StatusCode {
    // TODO: Implement email sending logic here
    println!("Received contact form submission: {:?}", form_data.name);
    StatusCode::OK
}