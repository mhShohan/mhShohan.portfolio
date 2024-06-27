interface Technology {
	id: string;
	name: string;
	image: string;
	createdAt: Date;
	updatedAt: Date;
}

interface Project {
	name: string;
	description: string;
	category: 'Frontend' | 'Backend' | 'Full-stack';
	featured: boolean;
	features: string[];
	technologies: Technology[];
	cover: string;
	repositoryLink: {
		source_code: string;
		client_side_code: string;
		server_side_code: string;
	};
	liveSiteLink: string;
}

interface Profile {
	name: string;
	title: string;
	bio: string;
	description: string;
	interestedIn: string;
	socialLinks: {
		github: string;
		linkedin: string;
		facebook: string;
		twitter: string;
		leetcode: string;
		gitLab: string;
	};
	resume: string;
	techStacks: {
		languages: Technology[];
		databases: Technology[];
		backend: Technology[];
		frontend: Technology[];
		tools: Technology[];
	};
	email: string;
	contactNo: string;
	address: string;
	experiences: {
		title: string;
		organization: string;
		link: string;
		responsibilities: string[];
		startDate: Date;
		endDate: Date;
	}[];
	educations: {
		institute: string;
		certificate: string;
		startDate: string;
		endDate: string;
	}[];
	viewPersonalInterest: boolean;
	role: 'ADMIN' | 'USER';
}

interface Message {
	name: string;
	email: string;
	message: string;
	read: boolean;
	createdAt: Date;
	updatedAt: Date;
}
