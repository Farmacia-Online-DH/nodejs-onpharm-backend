CREATE TABLE carrinhos(
	carrinho_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    fk_pedido INT NOT NULL,
    fk_produto INT NOT NULL,
    quantidade INT NOT NULL,
	
    FOREIGN KEY (fk_pedido) REFERENCES pedidos(pedido_id),
    FOREIGN KEY (fk_produto) REFERENCES produtos(produto_id)
)

CREATE TABLE enderecos_farma(
	enderecofarma_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	cep VARCHAR(8),
	logradouro VARCHAR(60),
    numero INT NOT NULL,
	complemento VARCHAR(30),
	cidade VARCHAR(30),
	estado VARCHAR(30),
    fk_farmacia_id INT NOT NULL,
    
    FOREIGN KEY (fk_farmacia_id) REFERENCES farmacias(farmacia_id)

);


CREATE TABLE enderecos_usuarios(
	endereco_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	cep VARCHAR(8),
    logradouro VARCHAR(60),
	numero INT NOT NULL,
	complemento VARCHAR(30),
    cidade VARCHAR(30),
    estado VARCHAR(30),
    fk_usuario INT NOT NULL,
    
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(usuario_id)

);

CREATE TABLE farmacias(
	farmacia_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	razaosocial VARCHAR(60) NOT NULL,
  senha VARCHAR(20) NOT NULL,
	email VARCHAR(60) NOT NULL,
  telefone VARCHAR(15) NOT NULL,
  cnpj VARCHAR(14) NOT NULL
);

CREATE TABLE pagamentos(
	pagamento_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    numero_cartao VARCHAR(16) NOT NULL,
    nome_impresso VARCHAR(30) NOT NULL,
    validade VARCHAR(7) NOT NULL,
    cvv INT NOT NULL,
    apelido VARCHAR(11),
    cpf_titular VARCHAR(11),
    fk_usuario INT NOT NULL,
    
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(usuario_id)
);


CREATE TABLE pedidos(
	pedido_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    status_compra VARCHAR(20) NOT NULL,
    valor_final DECIMAL(8,2),
    fk_usuario INT NOT NULL,
    fk_pagamento INT NOT NULL,
    fk_farmacia INT NOT NULL,
    
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(usuario_id),
	FOREIGN KEY (fk_pagamento) REFERENCES pagamentos(pagamento_id),
    FOREIGN KEY (fk_farmacia) REFERENCES farmacias(farmacia_id)

);

CREATE TABLE produtos(
	 produto_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
     nome_produto VARCHAR(20) NOT NULL,
     preco DECIMAL(7,2) NOT NULL,
     descricao VARCHAR(100) NOT NULL,
     categoria VARCHAR(20) NOT NULL,
     estoque INT NOT NULL,
     fabricante VARCHAR(20),
     fk_farmacia INT NOT NULL,
     
     FOREIGN KEY (fk_farmacia) REFERENCES farmacias(farmacia_id)
);

CREATE TABLE usuarios(
	usuario_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    email VARCHAR(60) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    cpf VARCHAR(11) NOT NULL
);