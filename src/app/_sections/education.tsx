"use client";

import React from "react";
import SectionLayout from "../_components/sectionLayout";
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StepIndicator, { stepIndicatorClasses } from "@mui/joy/StepIndicator";

import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import ScrollAnimation from "react-animate-on-scroll";
import { useTheme } from "@mui/joy";
import content from "../../content";
import type { IEducation } from "../../content";

const educations: IEducation[] = content.homepage.education;

const Education = () => {
    const theme = useTheme();
    return (
        <SectionLayout name="education">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <Typography level="h1">Education</Typography>
            </ScrollAnimation>

            <Stack
                sx={{
                    flexDirection: "row-reverse",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",

                    [theme.breakpoints.down(600)]: {
                        flexDirection: "column-reverse",
                    },
                }}
            >
                <Stepper
                    orientation="vertical"
                    sx={{
                        "--StepIndicator-size": "6rem",
                        "--Step-connectorRadius": "1rem",
                        "--Step-connectorThickness": "2px",
                        [theme.breakpoints.down(800)]: {
                            "--StepIndicator-size": "3rem",
                        },
                        [`.${stepIndicatorClasses.root}`]: {
                            [`& img`]: {
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            },
                            backgroundColor: "transparent",
                            border: "none",
                            borderRadius: 0,
                        },
                    }}
                >
                    {educations.map(
                        (
                            {
                                institute,
                                location,
                                degree,
                                time: { start, end },
                                logo
                            },
                            i: number
                        ) => (
                            // @ts-ignore
                            <Step 
                                key={i}
                                indicator={
                                    <ScrollAnimation animateIn="fadeInLeft" animateOnce>
                                        <StepIndicator>
                                            <img src={"images/" + logo} />
                                        </StepIndicator>
                                    </ScrollAnimation>
                                }
                            >
                                <ScrollAnimation animateIn="fadeIn" animateOnce>
                                    <Stack
                                        sx={(theme) => ({
                                            ml: 6,
                                            [theme.breakpoints.down(800)]: {
                                                ml: 3,
                                            },
                                        })}
                                    >
                                        <Typography level="h3">{`${institute}, ${location}`}</Typography>
                                        <Stack sx={{ mb: 1 }}>
                                            {degree && (
                                                <Typography level="h4">
                                                    {degree}
                                                </Typography>
                                            )}
                                        </Stack>
                                        <Typography level="body-sm">{`${start} - ${end}`}</Typography>
                                    </Stack>
                                </ScrollAnimation>
                            </Step>
                        )
                    )}
                    <Step
                        sx={{ display: "none !important" }}
                        indicator={
                            <StepIndicator
                                sx={{ display: "hidden" }}
                            ></StepIndicator>
                        }
                    ></Step>
                </Stepper>


            </Stack>
        </SectionLayout>
    );
};

export default Education;
