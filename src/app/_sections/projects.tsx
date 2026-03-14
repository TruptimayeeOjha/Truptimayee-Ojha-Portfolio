"use client";

import React from "react";
import SectionLayout from "../_components/sectionLayout";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Stack from "@mui/joy/Stack";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import East from "@mui/icons-material/East";
import ScrollAnimation from "react-animate-on-scroll";
import content from "../../content";
import type { IProject } from "../../content";
import { useTheme } from "@mui/joy";

const projects: IProject[] = content.homepage.projects;

const Projects = () => {
    const theme = useTheme();

    return (
        <SectionLayout name="projects">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <Typography level="h1" sx={{ mb: 4 }}>
                    Projects
                </Typography>
            </ScrollAnimation>

            <Grid container spacing={4} sx={{ flexGrow: 1 }}>
                {projects.map((project, i) => (
                    <Grid key={i} xs={12} md={6}>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce>
                            <Card
                                variant="outlined"
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.05)`,
                                    borderColor: theme.vars.palette.primary.outlinedBorder,
                                    "&:hover": {
                                        boxShadow: "sm",
                                        borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                    },
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                    <Typography level="h3" sx={{ mb: 1 }}>
                                        {project.title}
                                    </Typography>
                                    
                                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                                        {project.techStack.split(", ").map((tech, j) => (
                                            <Chip key={j} variant="soft" color="primary" size="sm">
                                                {tech}
                                            </Chip>
                                        ))}
                                    </Stack>

                                    <Typography level="body-sm" sx={{ textAlign: "justify", mb: 2 }}>
                                        {project.description[0]}
                                    </Typography>
                                </CardContent>
                                
                                {project.link && (
                                    <CardActions sx={{ mt: 'auto', pt: 2 }}>
                                        <Button
                                            component="a"
                                            href={project.link}
                                            target="_blank"
                                            variant="solid"
                                            color="primary"
                                            endDecorator={<OpenInNewIcon />}
                                            sx={{ width: { xs: '100%', sm: 'auto' } }}
                                        >
                                            View Source Code
                                        </Button>
                                    </CardActions>
                                )}
                            </Card>
                        </ScrollAnimation>
                    </Grid>
                ))}
            </Grid>
        </SectionLayout>
    );
};

export default Projects;
