import React from "react";

export default function BugTitle(props) {
    return (
        <div className="bug_row title_row">
            <span className={"bug_title_wrap"}>
                <span className={`severity severity--${props.severity}`}></span>
                <h2 className="bug_title">
                    {props.title.length > 30
                        ? `${props.title.slice(0, 30)}..`
                        : props.title}
                </h2>
            </span>
            <h3>{props.project}</h3>
        </div>
    );
}
