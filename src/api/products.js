const API = "http://127.0.0.1:8000";

export async function getProducts() {
    const response = await fetch(`${API}/products/`);

    if (!response.ok) {
        throw new Error("Failed to load products");
    }

    return await response.json();
}

export async function getCategories() {
    const response = await fetch(`${API}/products/categories`);

    if (!response.ok) {
        throw new Error("Failed to load categories");
    }

    return await response.json();
}

export async function getProduct(id) {
    const response = await fetch(`${API}/products/${id}`);

    if (!response.ok) {
        throw new Error("Product not found");
    }

    return await response.json();
}