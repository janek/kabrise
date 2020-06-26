import React from "react"
import styled from "styled-components"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "@common/Layout"
import { Container } from "@components/global"

const FormPage = () => {
	const intl = useIntl()
	return (
		<Layout>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
				<title>kabrise bewerben draft</title>
			</head>
			<body>
				<FormFrame
					id="typeform-full"
					width="100%"
					height="100%"
					frameborder="0"
					allow="camera; microphone; autoplay; encrypted-media;"
					src="https://kabrisekollektiv.typeform.com/to/oe7fqk0l"
				></FormFrame>
				<script
					type="text/javascript"
					src="https://embed.typeform.com/embed.js"
				></script>
			</body>
		</Layout>
	)
}
export default FormPage

const FormFrame = styled.iframe`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	border: 0;
`
