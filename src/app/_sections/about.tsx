"use client";

import Typography from "@mui/joy/Typography";
import SectionLayout from "../_components/sectionLayout";
import ScrollAnimation from "react-animate-on-scroll";
import LocationOn from "@mui/icons-material/LocationOn";
import Link from "@mui/joy/Link";
import Grid from "@mui/joy/Grid";
import { scroller } from "react-scroll";
import content from "../../content";

const { location, description } = content.homepage.about;

const About = () => {
    return (
        <SectionLayout name="about">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <Typography level="h1" sx={{ mb: 4 }}>About me</Typography>
            </ScrollAnimation>

            <Grid container spacing={6} alignItems="center">
                <Grid xs={12} md={4}>
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce>
                        <img 
                            src="images/my_photo.png" 
                            alt="Truptimayee Ojha"
                            style={{ 
                                width: "100%", 
                                maxWidth: "300px", 
                                borderRadius: "20px",
                                display: "block",
                                margin: "0 auto",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
                            }} 
                        />
                    </ScrollAnimation>
                </Grid>
                
                <Grid xs={12} md={8}>
                    <ScrollAnimation animateIn="fadeInRight" animateOnce>
                        <Typography
                            level="body-sm"
                            startDecorator={<LocationOn fontSize="small" />}
                            sx={{ ml: -1, mb: 2 }}
                        >
                            {location}
                        </Typography>
                        
                        <Typography sx={{ textAlign: "justify", mb: 3 }}>
                            {description}
                        </Typography>
                        
                        <Link
                            role="menuitem"
                            component="button"
                            onClick={() =>
                                scroller.scrollTo("skills", {
                                    duration: 1000,
                                    smooth: true,
                                })
                            }
                            sx={{ fontWeight: "bold" }}
                        >
                            Check out my Skills...
                        </Link>
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </SectionLayout>
    );
};

export default About;
