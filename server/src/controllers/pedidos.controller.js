const pedidosController = {}
const Pedido = require('../models/pedido')


pedidosController.createPedido = async(req, res) => {
    const newPedido = new Pedido(req.body)
    await newPedido.save();
    console.log(newPedido);
    res.json({ id: newPedido._id });
}

pedidosController.editPedido = async(req, res) => {
    const editPedido = new Pedido(req.body)
    await Pedido.findByIdAndUpdate(req.params.id, editPelicula);
    res.json({ status: "Pedido actualizado" });
}

pedidosController.getPedidos = async(req, res) => {
    const pedidos = await Pedido.find();
    res.json(pedidos);
}

pedidosController.getPedido = async(req, res) => {
    const pedido = await Pedido.findById(req.params.id);
    res.json(pedido);
}

pedidosController.deletePedido = async(req, res) => {
    await Pedido.findByIdAndDelete(req.params.id)
    res.json({ status: "Pedido borrado" });
}

module.exports = pedidosController;