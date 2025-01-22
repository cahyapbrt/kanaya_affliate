<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <link rel="stylesheet" href="admin-style.css">
</head>
<body>
    <header>
        <h1>Admin Panel</h1>
    </header>

    <main>
        <section>
            <h2>Tambah Kategori</h2>
            <form id="addCategoryForm">
                <input type="text" id="categoryName" placeholder="Nama Kategori" required>
                <button type="submit">Tambah Kategori</button>
            </form>

            <h2>Daftar Kategori</h2>
            <ul id="categoryList"></ul>
        </section>

        <section>
            <h2>Tambah Produk</h2>
            <form id="addProductForm">
                <input type="text" id="productName" placeholder="Nama Produk" required>
                <select id="productCategory" required>
                    <!-- Kategori akan dimuat di sini melalui JS -->
                </select>
                <button type="submit">Tambah Produk</button>
            </form>

            <h2>Daftar Produk</h2>
            <ul id="productList"></ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Kanaya Affiliate</p>
    </footer>

    <script src="admin-script.js"></script>
</body>
</html>
