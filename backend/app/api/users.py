from fastapi import APIRouter
from pydantic import BaseModel
from app.db import get_connection

router = APIRouter(tags=["users"])

class UserCreate(BaseModel):
    username: str
    password: str

@router.get("/users")
def get_users():
    conn = get_connection()
    users = conn.execute("SELECT * FROM users").fetchall()
    conn.close()
    return [dict(u) for u in users]

@router.post("/user")
def create_user(user: UserCreate):
    conn = get_connection()
    # volontairement vulnérable (SQLi)
    conn.execute(
        f"INSERT INTO users (username, password) VALUES ('{user.username}', '{user.password}')"
    )
    conn.commit()
    conn.close()
    return {"message": "User created"}
