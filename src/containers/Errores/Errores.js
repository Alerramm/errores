import React, { Component } from 'react';

import { Layout, Input, Row, Col, Descriptions } from 'antd';
const { Content } = Layout;
const { Search } = Input;

class Errores extends Component {
	state = { codigo: '', mensaje: '', modulo: '', code: '', mensajeHeader: '' };
	handleSearch = async () => {
		const { codigo } = this.state;
		const data = {
			codigo: codigo,
		};
		const headers = { 'Content-Type': 'application/json' };
		const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		const url = 'http://www.misistema.mx/beluga/Finanzas/endpoints/app/get/errores.php';
		let instance = await fetch(proxyurl + url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers,
		});
		const response = await instance.json();
		this.setState({
			mensaje: response.payload.mensaje,
			modulo: response.payload.modulo,
			code: response.headerResponse.code,
			mensajeHeader: response.headerResponse.mensaje,
		});
	};

	handleChange = ({ target }) => {
		this.setState({
			[target.name]: target.value,
		});
	};
	render() {
		const { codigo, mensaje, modulo, code, mensajeHeader } = this.state;
		return (
			<Content>
				<Layout style={{ padding: '24px 24px', background: '#fff' }}>
					<Row>
						<Col span={12}>
							<Row>
								<Col span={12} offset={6}>
									<Search
										name="codigo"
										placeholder="Ingresa el codigo del error"
										enterButton="Buscar"
										size="large"
										value={codigo}
										onChange={this.handleChange}
										onSearch={this.handleSearch}
									/>
								</Col>
							</Row>
						</Col>
						<Col span={12}>
							<Descriptions
								title="Respuesta del servicio"
								bordered
								column="2"
								size="middle"
							>
								<Descriptions.Item label="Codigo" span={3}>
									{code}
								</Descriptions.Item>
								<Descriptions.Item label="Mensaje" span={3}>
									{mensajeHeader}
								</Descriptions.Item>
							</Descriptions>
							<br />
							<Descriptions
								title="Respuesta del codigo"
								bordered
								column="2"
								size="middle"
							>
								<Descriptions.Item label="Modulo" span={3}>
									{modulo}
								</Descriptions.Item>
								<Descriptions.Item label="Mensaje" span={3}>
									{mensaje}
								</Descriptions.Item>
							</Descriptions>
						</Col>
					</Row>
				</Layout>
			</Content>
		);
	}
}
export default Errores;
