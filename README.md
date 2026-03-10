# Simple CI/CD App

Project ini adalah aplikasi Node.js sederhana untuk memenuhi tugas praktikum CI/CD menggunakan GitHub Actions. Aplikasi menyediakan endpoint `GET /` yang mengembalikan teks `CI/CD pipeline is working`.

## Menjalankan aplikasi secara lokal

Pastikan menggunakan Node.js 20 atau versi yang kompatibel, lalu jalankan:

```bash
npm ci
npm start
```

Server akan berjalan di `http://localhost:3000`.

## Menjalankan test

Jalankan perintah berikut:

```bash
npm test
```

Test memverifikasi bahwa endpoint `/` mengembalikan status `200` dan body yang sesuai.

## Build Docker image

Jalankan perintah berikut:

```bash
docker build -t simple-cicd-app .
```

Lalu untuk menjalankan container:

```bash
docker run -p 3000:3000 simple-cicd-app
```

## Penjelasan singkat pipeline GitHub Actions

Workflow berada di `.github/workflows/main.yml` dan berjalan otomatis setiap ada event `push`.

- Job `test` melakukan checkout code, menyiapkan Node.js 20, menjalankan `npm ci`, lalu menjalankan `npm test`.
- Job `build` menggunakan `needs: test`, sehingga hanya dijalankan jika job `test` berhasil.
- Job `build` menjalankan `docker build -t simple-cicd-app .` untuk memastikan image container dapat dibangun dengan sukses.
