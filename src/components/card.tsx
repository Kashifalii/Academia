"use client"

import React from "react";

type CardProps = {
    logo?: string;
    title: React.ReactNode;
    paragraph?: React.ReactNode;
};


export default function Card({ logo, title, paragraph }: CardProps) {
    return (
        <div className="card">
            <i className={logo}></i>
            <h1 className="card-title">{title}</h1>
            <p className="card-para">{paragraph}</p>
        </div>
    );
}
