"use client";

import { FunctionComponent, useState, useRef, Fragment } from "react";
import SectionLayout from "../_components/sectionLayout";
import Typography from "@mui/joy/Typography";
import Input, { InputProps } from "@mui/joy/Input";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator, {
    listItemDecoratorClasses,
} from "@mui/joy/ListItemDecorator";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option, { optionClasses } from "@mui/joy/Option";
import ScrollAnimation from "react-animate-on-scroll";
import Check from "@mui/icons-material/Check";
import { useTheme } from "@mui/joy";
import {
    CplusplusOriginal,
    JavaOriginal,
    JavascriptOriginal,
    Html5Original,
    Css3Original,
    NodejsOriginal,
    ExpressOriginal,
    ReactOriginal,
    BootstrapOriginal,
    GitlabOriginal,
    PostmanOriginal,
    MysqlOriginal,
    GitPlain,
    GithubOriginal,
    NextjsOriginal,
    NestjsOriginal,
    TypescriptOriginal,
    LaravelOriginal
} from "devicons-react";

const TableauIcon = ({ size = 28, color = "#E97627" }) => (
    <svg width={size} height={size} viewBox="0 0 512 512" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M242.69 340.3h26.62v-72.6h67v-25.82h-67v-72.6h-26.62v72.6h-66.15v25.82h66.15zM119.26 445.18h22.59v-64.54h59.7v-20.17h-59.7v-65.34h-22.59v65.34h-59.7v20.17h59.7zM370.15 212h22.59v-64.5h60.5v-19.37h-60.5V62.79h-22.59v65.34h-59.7v19.37h59.7zM246.72 496h19.36v-46h41.15v-16.92h-41.15v-46h-19.36v46h-40.33V450h40.33zM120.07 212h21v-65.31h60.51v-18.56H141V62.79h-21v65.34H59.56v18.56h60.51zm315.65 96.84h19.36v-45.18H496v-17.74h-40.92v-45.18h-19.36v45.18h-40.33v17.74h40.33z" />
        <path fillRule="evenodd" d="M370.15 445.18h22.59v-64.54h60.5v-20.17h-60.5v-65.34h-22.59v65.34h-59.7v20.17h59.7z" />
        <path d="M307 74.08V60.37h-40.34V16h-14.52v44.37h-40.33v13.71h40.33v44.37h14.52V74.08zM56.11 305.61h14.52v-44.37H111v-13.71H70.63V204H56.11v43.56H16v14.52l40.11-.08z" />
    </svg>
);

const PowerBIIcon = ({ size = 28, color = "#F2C811" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M6 14v6H2v-6h4zm6-7v13H8V7h4zm6-5v18h-4V2h4z" />
    </svg>
);

const TechnologyEntity = (
    name: string,
    url: string,
    Icon: FunctionComponent<any> | null,
    keywords: string[]
) => {
    return {
        name,
        url,
        Icon,
        keywords,
    };
};

const technologiesArray = [
    // Languages
    TechnologyEntity("C++", "https://cplusplus.com/", CplusplusOriginal, ["language"]),
    TechnologyEntity("Java", "https://www.java.com/", JavaOriginal, ["language"]),
    TechnologyEntity("JavaScript", "https://developer.mozilla.org/", JavascriptOriginal, ["language", "frontend"]),
    TechnologyEntity("TypeScript", "https://www.typescriptlang.org/", TypescriptOriginal, ["language", "frontend"]),
    TechnologyEntity("HTML", "https://developer.mozilla.org/", Html5Original, ["language", "frontend"]),
    TechnologyEntity("CSS", "https://developer.mozilla.org/", Css3Original, ["language", "frontend"]),

    // Frameworks & Libraries
    TechnologyEntity("React.js", "https://reactjs.org/", ReactOriginal, ["framework", "frontend"]),
    TechnologyEntity("Next.js", "https://nextjs.org/", NextjsOriginal, ["framework", "frontend"]),
    TechnologyEntity("Node.js", "https://nodejs.org/", NodejsOriginal, ["framework", "backend"]),
    TechnologyEntity("Express.js", "https://expressjs.com/", ExpressOriginal, ["framework", "backend"]),
    TechnologyEntity("NestJS", "https://nestjs.com/", NestjsOriginal || NextjsOriginal, ["framework", "backend"]),
    TechnologyEntity("Laravel", "https://laravel.com/", LaravelOriginal, ["framework", "backend"]),
    TechnologyEntity("Bootstrap", "https://getbootstrap.com/", BootstrapOriginal, ["framework", "frontend"]),

    // Databases
    TechnologyEntity("MySQL", "https://www.mysql.com/", MysqlOriginal, ["database"]),

    // Tools & Version Control
    TechnologyEntity("Git", "https://git-scm.com/", GitPlain, ["version control", "tools"]),
    TechnologyEntity("GitHub", "https://github.com/", GithubOriginal, ["version control", "tools"]),
    TechnologyEntity("GitLab", "https://about.gitlab.com/", GitlabOriginal, ["version control", "tools"]),
    TechnologyEntity("Postman", "https://www.postman.com/", PostmanOriginal, ["tools"]),
    TechnologyEntity("PowerBI", "https://powerbi.microsoft.com/", () => <PowerBIIcon size={17} color="#F2C811" />, ["tools", "visualization"]),
    TechnologyEntity("Tableau", "https://www.tableau.com/", () => <TableauIcon size={17} color="#E97627" />, ["tools", "visualization"])
];

const keywords: { [key: string]: string[] } = {
    domain: ["frontend", "backend"],
    type: [
        "language",
        "framework",
        "database",
        "tools",
        "version control",
        "visualization",
    ],
};

type DebounceProps = {
    handleDebounce: (value: string) => void;
    debounceTimeout: number;
};

function DebounceInput(props: InputProps & DebounceProps) {
    const { handleDebounce, debounceTimeout, ...other } = props;

    const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
        undefined
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            handleDebounce(event.target.value);
        }, debounceTimeout);
    };

    return <Input {...other} onChange={handleChange} />;
}

const intersection = (as: string[], bs: string[]) => {
    return as.filter((a) => bs.includes(a));
};

interface Props {
    query: string;
    filter: string[];
    name: string;
    Icon: FunctionComponent<any> | null;
    keywords: string[];
}

const SkillChip = ({ query, filter, name, Icon, keywords }: Props) => {
    const isQueried = query !== "";
    const isQueryMatched = name.toLowerCase().startsWith(query.toLowerCase());
    const isFiltered = filter.length > 0;
    const isFilterMatched = intersection(filter, keywords).length > 0;

    const isMatched =
        (!isQueried && !isFiltered) ||
        (!isFiltered && isQueried && isQueryMatched) ||
        (!isQueried && isFiltered && isFilterMatched) ||
        (isQueryMatched && isFilterMatched);

    return (
        <Chip
            key={name}
            variant="outlined"
            size="lg"
            startDecorator={Icon && <Icon />}
            sx={{
                opacity: isMatched ? 1 : 0.4,
                order: isMatched ? 1 : 2,
                mx: 1,
            }}
        >
            {name}
        </Chip>
    );
};

const Skills = () => {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState<string[]>([]);

    const handleDebounce = (value: string) => {
        setQuery(value);
    };

    const handleChange = (newValue: string[] | null) => {
        if (newValue !== null) {
            setFilter(newValue);
        }
    };

    const clickHandler = (value: string) => {
        setFilter((prev) => prev.filter((val) => val !== value));
    };

    return (
        <SectionLayout odd name="skills">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <Typography level="h1">Skills</Typography>
            </ScrollAnimation>

            <Stack direction="row" spacing={2}>
                <DebounceInput
                    variant="outlined"
                    size="sm"
                    placeholder="search a skill..."
                    sx={{ flex: 1 }}
                    debounceTimeout={1000}
                    handleDebounce={handleDebounce}
                />
                <Select
                    variant="outlined"
                    size="sm"
                    placeholder="filter by ..."
                    multiple
                    renderValue={(o) => <Fragment>{"filter by ..."}</Fragment>}
                    onChange={(_, newValue: string[] | null) =>
                        handleChange(newValue)
                    }
                    value={filter}
                >
                    {Object.keys(keywords).map((title: string, i: number) => (
                        <Fragment key={title}>
                            {i !== 0 && <ListDivider role="none" />}
                            <List sx={{ "--ListItemDecorator-size": "28px" }}>
                                <ListItem sticky>
                                    <Typography
                                        level="body-xs"
                                        sx={{ textTransform: "uppercase" }}
                                    >
                                        {title}
                                    </Typography>
                                </ListItem>
                                {keywords[title].map((value) => (
                                    <Option
                                        key={value}
                                        value={value}
                                        sx={{
                                            [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:
                                            {
                                                opacity: 1,
                                            },
                                        }}
                                    >
                                        <ListItemDecorator sx={{ opacity: 0 }}>
                                            <Check />
                                        </ListItemDecorator>
                                        {value}
                                    </Option>
                                ))}
                            </List>
                        </Fragment>
                    ))}
                </Select>
            </Stack>

            {filter.length > 0 && (
                <Stack
                    spacing={1}
                    sx={{ mt: 2, flexWrap: "wrap", rowGap: 1 }}
                    direction="row"
                >
                    {filter.map((value: string) => (
                        <Chip
                            size="sm"
                            endDecorator={
                                <ChipDelete
                                    onClick={() => clickHandler(value)}
                                />
                            }
                            key={value}
                            variant="outlined"
                        >
                            {value}
                        </Chip>
                    ))}
                </Stack>
            )}

            <Divider sx={{ my: 2 }} />

            <Stack
                direction="row"
                sx={{
                    flex: 1,
                    flexWrap: "wrap",
                    rowGap: 2,
                    justifyContent: "center",
                }}
            >
                {technologiesArray.map((techEntity, i) => (
                    <SkillChip
                        {...techEntity}
                        query={query}
                        filter={filter}
                        key={i}
                    />
                ))}
            </Stack>
        </SectionLayout>
    );
};

export default Skills;
