const keystone = require('keystone');

const { Types } = keystone.Field;

const Cardapio = new keystone.List('Cardapio', {map: { name: 'sabor'}});

Cardapio.add({
  imagem: { type: Types.CloudinaryImages, require: true, initial: true },
  sabor: { type: Types.Text, required: true, initial: true, index: true },
  descricao: { type: Types.Textarea, required: true, initial: true, index: true },
  preco: { type: Types.Number, required: true, initial: true, index: true }
});

Cardapio.register();