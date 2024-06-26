const Technology = {
	id: string,
	name: string,
	image: string,
	createdAt: date,
	updatedAt: date
}

const Project = {
	name: string,
	description: string,
	category: 'Frontend' | 'Backend' | 'Full-stack',
	featured: Boolean,
	features: [string],
	technologies: [Technology],
	cover: string,
	repositoryLink:{
		source_code: string,
		client_side_code: string,
		server_side_code: string
	},
	liveSiteLink: string
}

const Profile = {
	name: string,
	title: string,
	bio: string,
	description: string,
	interestedIn: string,
	socialLinks:{
		github: string,
		linkedin: string,
		facebook: string,
		twitter: string,
		leetcode: string,
		gitLab: string
	},
	resume: string,
	techStacks: {
		languages: [Technology],
		databases: [Technology],
		backend: [Technology],
		frontend: [Technology],
		tools: [Technology]
	},
	email: string,
	contactNo: string,
	address: string,
	experiences:[
		{
			title: string,
			organization: string,
			link: string,
			responsibilities: [string],
			startDate: Date,
			endDate: Date
		}
	],
	educations: [
		{
			institute: string,
			certificate: string,
			startDate: string,
			endDate
		}
	],
	viewPersonalInterest: Boolean
}

const Message = {
	name: string,
	email: string,
	message: string,
	read: Boolean,
	createdAt: date,
	updatedAt: date,
}




