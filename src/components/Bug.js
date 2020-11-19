import React, { useEffect, useState } from "react";
import BugTitle from "./BugTitle";

export default function Bug(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (props.selectedBug) {
            if (props.bug._id === props.selectedBug._id) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        }
    }, [props.bug, props.selectedBug]);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <article
            className={isActive ? "bug_wrap is_open" : "bug_wrap"}
            onClick={() => {
                props.selectBug(props.bug);
            }}
        >
            <BugTitle
                id={props.bug._id}
                title={props.bug.title}
                project={props.bug.project}
                severity={props.bug.severity}
                toggle={toggleIsOpen}
            />
        </article>
    );
}
