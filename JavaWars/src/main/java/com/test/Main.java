package com.test;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class Main {
    static void main(String[] args) {
        GsonBuilder gsonBuilder = new GsonBuilder();

        Gson gson = gsonBuilder
                .setPrettyPrinting()
                .create();

        System.out.println(gson.toJson(new Post(1, 1, "post title", "post description")));
    }
}

class Post {
    private int id;
    private int userId;
    private String title;
    private String description;

    public Post(int id, int userId, String title, String description) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}