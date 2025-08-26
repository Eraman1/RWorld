import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default function Editor() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (editorRef.current) {
            new Quill(editorRef.current, { theme: "snow" });
        }
    }, []);

    return <div  ref={editorRef} />;
}
