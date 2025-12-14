from fastapi import APIRouter
from pydantic import BaseModel
from app.db import get_connection

router = APIRouter(tags=["comments"])

class CommentCreate(BaseModel):
    author: str
    content: str

@router.get("/comments")
def get_comments():
    conn = get_connection()
    comments = conn.execute("SELECT * FROM comments").fetchall()
    conn.close()
    return [dict(c) for c in comments]

@router.post("/comment")
def create_comment(comment: CommentCreate):
    conn = get_connection()
    # volontairement vulnérable (XSS)
    conn.execute(
        f"INSERT INTO comments (author, content) VALUES ('{comment.author}', '{comment.content}')"
    )
    conn.commit()
    conn.close()
    return {"message": "Comment added"}
