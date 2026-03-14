"use client";

import React from "react";
import SectionLayout from "../_components/sectionLayout";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import Card from "@mui/joy/Card";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import Phone from "@mui/icons-material/Phone";
import EastIcon from "@mui/icons-material/East";
import ScrollAnimation from "react-animate-on-scroll";
import { useTheme } from "@mui/joy";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
    const theme = useTheme();

    return (
        <SectionLayout odd name="contact">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <Typography level="h1" sx={{ textAlign: "center", mb: 8, mt: 4 }}>
                    Get In Touch
                </Typography>
            </ScrollAnimation>

            <Grid container spacing={6} sx={{ flexGrow: 1, maxWidth: 1000, margin: "0 auto" }}>
                {/* Left Column */}
                <Grid xs={12} md={6}>
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce>
                        <Typography level="h2" sx={{ mb: 1 }}>
                            I'd love to hear from you
                        </Typography>
                        <Typography level="body-md" sx={{ mb: 4, color: "text.tertiary" }}>
                            Thinking about a project or just want to chat? Drop me a message ✌️
                        </Typography>

                        <Stack spacing={2} sx={{ mb: 6 }}>
                            <Card
                                variant="outlined"
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 2,
                                    backgroundColor: `rgba(${theme.vars.palette.neutral.mainChannel} / 0.05)`,
                                    border: "1px solid",
                                    borderColor: "neutral.outlinedBorder",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        borderColor: "primary.outlinedHoverBorder",
                                        backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.05)`,
                                    }
                                }}
                            >
                                <Phone sx={{ color: "primary.main" }} />
                                <Stack>
                                    <Typography level="body-sm" sx={{ color: "text.tertiary" }}>Phone</Typography>
                                    <Typography level="title-md">+91 1234567890</Typography>
                                </Stack>
                            </Card>

                            <Card
                                variant="outlined"
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 2,
                                    backgroundColor: `rgba(${theme.vars.palette.neutral.mainChannel} / 0.05)`,
                                    border: "1px solid",
                                    borderColor: "neutral.outlinedBorder",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        borderColor: "primary.outlinedHoverBorder",
                                        backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.05)`,
                                    }
                                }}
                            >
                                <EmailOutlined sx={{ color: "primary.main" }} />
                                <Stack>
                                    <Typography level="body-sm" sx={{ color: "text.tertiary" }}>Email</Typography>
                                    <Typography level="title-md">truptimayeeojha0@gmail.com</Typography>
                                </Stack>
                            </Card>
                        </Stack>

                        <Typography level="body-sm" sx={{ mb: 2, color: "text.tertiary" }}>
                            Connect with me
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {[
                                "linkedin.com/in/truptimayeeojha/",
                                "github.com/TruptimayeeOjha",
                            ].map((link, i) => (
                                <SocialIcon
                                    key={i}
                                    target="_blank"
                                    url={`https://${link}`}
                                    style={{ height: 40, width: 40 }}
                                    bgColor={theme.vars.palette.neutral[800]}
                                    fgColor={theme.vars.palette.neutral[100]}
                                />
                            ))}
                        </Stack>
                    </ScrollAnimation>
                </Grid>

                {/* Right Column (Form) */}
                <Grid xs={12} md={6}>
                    <ScrollAnimation animateIn="fadeInRight" animateOnce>
                        <Stack spacing={3}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input placeholder="Enter your name" variant="outlined" size="lg" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input placeholder="Enter your email" variant="outlined" size="lg" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Message</FormLabel>
                                <Textarea placeholder="Enter your message" variant="outlined" minRows={5} size="lg" />
                            </FormControl>
                            <Button
                                size="lg"
                                color="success"
                                endDecorator={<EastIcon />}
                                sx={{
                                    mt: 2,
                                    bgcolor: "#A5EEDB",
                                    color: "#183b31",
                                    "&:hover": {
                                        bgcolor: "#8bd8c3"
                                    }
                                }}
                            >
                                Send Message
                            </Button>
                        </Stack>
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </SectionLayout>
    );
};

export default Contact;
