const Compra = require("../models/Compra.models");

// Get all Compras
exports.getCompras = async (req, res) => {
  try {
    const compras = await Compra.find();

    return res.status(200).json({
      success: true,
      count: compras.length,
      data: compras,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// Add Compra
exports.addCompras = async (req, res) => {
  try {
    const { text, costo } = req.body;

    const compra = await Compra.create(req.body);

    return res.status(201).json({
      success: true,
      data: compra,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: message,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server error",
      });
    }
  }
};

// Delete  Compra
exports.deleteCompras = async (req, res) => {
    try {
        const compra = await Compra.findById(req.params.id);
        if(!compra){
            return res.status(404).json({
                success: false,
                error: "No compra found"
            });
        }
        await compra.remove();

        return res.status(200).json({
            success: true, 
            data: {}
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server error",
          });
    }
};
