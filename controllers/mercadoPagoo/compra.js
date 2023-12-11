import mercadopago from "mercadopago";


mercadopago.configure({ access_token: process.env.PROD_ACCESS_TOKEN });

const controller = {
    compra: (req, res) => {
        let productos = req.body.productos;

        let preference = {
            items: productos.map((producto) => ({
                id: producto.id,
                nombre: producto.nombre, // Modificación: Usar el nombre del producto
                currency_id: "ARS",
                unit_price: producto.precio,
                quantity: producto.cantidad,
            })),

            payer: {
                name: req.user && req.user.name ? req.user.name : "Usuario Anónimo",
            },
            back_urls: {
                success: "https://faugetdigital.shop/compra.php",
                failure: "",
                pending: "",
            },
            auto_return: "approved",
            binary_mode: true,
        };

        mercadopago.preferences
            .create(preference)
            .then((response) => {
                if (response) {
                    // Email sending code removed
                }
                res.status(200).json({ response });
            })
            .catch((error) => res.status(400).json({ error: error.message }));
    },
};

export default controller;
