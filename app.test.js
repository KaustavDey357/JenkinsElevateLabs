// app.test.js
const request = require('supertest');
const express = require('express');
const path = require('path');

// Import your app
const app = require('./app');

describe('GET /', () => {
  it('should return index.html content', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<!DOCTYPE html>'); // assuming your index.html has it
  });
});
