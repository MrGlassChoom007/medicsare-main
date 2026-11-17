export interface SiteConfig {
	name: string,
	copyright: string,
	address: string,
	phone: string,
	email: string,
	nav: {
		main: Array<{
			url: string;
			text: string;
		}>,
		info: Array<{
			url: string;
			text: string;
		}>,
		support: Array<{
			url: string;
			text: string;
		}>,
		legal: Array<{
			url: string;
			text: string;
		}>
	}
}

const siteConfig: SiteConfig = {
	name: "Recruitia",
	copyright: "© 2026 Recruitia. All rights reserved.",
	address: "404 Recruiting Drive, Winnipeg, MB, Canada",
	phone: "+1 (204) 123-4567",
	email: "info@recruitia.ca",
	nav: {
		main: [
			{ text: "About us", url: "/about" },
			{ text: "Partner With Us", url: "/services" },
			{ text: "Apply For Opportunities", url: "/contact" }
		],
		info: [
			{ text: "Partner With Us", url: "/services" },
		],
		support: [
			{ text: "About us", url: "/about" },
			{ text: "Apply For Opportunities", url: "/contact" }
		],
		
	},
}

export default siteConfig;
