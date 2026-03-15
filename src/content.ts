export interface IDate {
    month: number;
    year: number;
}

type IPresent = "Present";

export interface IExperience {
    time: {
        start: IDate;
        end: IDate | IPresent;
    };
    logo?: string;
    company: string;
    title: string;
    mode: string;
    location: string;
    description: string[];
    tools: string[];
    media?: IMedia[];
}

export interface IProject {
    title: string;
    techStack: string;
    description: string[];
    link?: string;
}

export interface ILinkMedia {
    type: "link";
    payload: string;
}

export type IMedia = ILinkMedia;

export interface ITime {
    start: number;
    end: number;
}

export interface IEducation {
    institute: string;
    location: string;
    time: ITime;
    degree?: string;
    logo?: string;
}

export interface IAbout {
    location: string;
    description: string;
}

export interface IHomepage {
    about: IAbout;
    experience: IExperience[];
    education: IEducation[];
    projects: IProject[];
}

export interface IContent {
    homepage: IHomepage;
}

const Content: IContent = {
    homepage: {
        about: {
            location: "Keonjhar, Odisha, India",
            description:
                "I am a passionate software developer with a strong foundation in computer science, specializing in full-stack development and machine learning. I enjoy tackling complex, real-world problems and translating them into clean, scalable, and efficient code. With a continuous learning mindset and dedication to engineering excellence, I strive to build impactful software solutions that deliver seamless user experiences and drive innovation.",
        },
        experience: [
            {
                time: {
                    start: {
                        month: 2,
                        year: 2026,
                    },
                    end: "Present",
                },
                logo: "hyscaler.png",
                company: "HyScaler | SDE Intern",
                title: "",
                mode: "Onsite",
                location: "Bhubaneswar, Odisha",
                description: [
                    "Undergoing hands-on training in full-stack web development and modern software engineering practices.",
                    "Working on real-world development tasks using React, Next.js, and backend frameworks.",
                    "Collaborating with senior developers to build scalable and maintainable code.",
                    "Writing clean, maintainable code and participating in debugging, testing, and feature implementation."
                ],
                tools: [
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "NestJS",
                    "Laravel",
                    "MySQL"
                ],
            },
            {
                time: {
                    start: {
                        month: 1,
                        year: 2025,
                    },
                    end: {
                        month: 5,
                        year: 2025,
                    },
                },
                logo: "nic.png",
                company: "NIC",
                title: "Project Trainee",
                mode: "Hybrid",
                location: "Puri, Odisha",
                description: [
                    "Developed a machine learning-based web application that predicts the likelihood of Heart Disease, Diabetes, and Parkinson’s Disease.",
                    "Built and evaluated multiple ML models including Logistic Regression, SVM, Random Forest, and KNN, achieving up to 91% accuracy.",
                    "Integrated the trained models into an interactive Streamlit interface, allowing users to input medical data and receive instant predictions.",
                    "Enhanced model performance through data cleaning, feature scaling, and cross-validation techniques.",
                    "Focused on usability and accessibility by providing clear prediction results and actionable feedback for end-users."
                ],
                tools: [
                    "Python",
                    "Machine Learning",
                    "Streamlit",
                ],
            }
        ],
        projects: [
            {
                title: "Multiple Disease Prediction System",
                techStack: "Python, Streamlit, Machine Learning",
                description: [
                    "Developed a machine learning-based web application utilizing Logistic Regression, SVM, Random Forest, and KNN to predict Heart Disease, Diabetes, and Parkinson’s Disease with up to 91% accuracy via an interactive Streamlit interface."
                ],
                link: "https://github.com/TruptimayeeOjha/Multiple-Disease-Prediction"
            },
            {
                title: "Employee Leave Management System",
                techStack: "HTML, CSS, JS, Node.js, Express.js, MySQL",
                description: [
                    "Developed a full-stack role-based Employee Leave Management System using Node.js, Express, and MySQL to streamline leave applications, real-time balance tracking, and secure manager approval workflows via RESTful APIs."
                ],
                link: "https://github.com/TruptimayeeOjha/Emplyee-Leae-Management-System"
            }
        ],
        education: [
            {
                institute: "Utkal University",
                location: "Vani Vihar",
                degree: "Master of Computer Applications (CGPA: 8.4)",
                time: {
                    start: 2023,
                    end: 2025,
                },
                logo: "utkal_university.png"
            },
            {
                institute: "Bhadrak Autonomous College",
                location: "Bhadrak",
                degree: "B.Sc. in Computer Science (CGPA: 9.3)",
                time: {
                    start: 2020,
                    end: 2023,
                },
                logo: "bhadrak_college.png"
            },
            {
                institute: "Jhadeswar +2 Science Residential College",
                location: "Balasore",
                degree: "Intermediate (Percentage: 73%)",
                time: {
                    start: 2018,
                    end: 2020,
                },
                logo: "jsrc_college.png"
            },
            {
                institute: "Government High School",
                location: "Soso",
                degree: "Matriculation (Percentage: 81%)",
                time: {
                    start: 2015,
                    end: 2018,
                },
                logo: "bse_odisha.png"
            }
        ],
    },
};

export default Content;
