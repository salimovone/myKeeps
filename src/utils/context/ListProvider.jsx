import React from "react";

const ListProvider = () => {
    const handleListNotes = async () => {
        try {
            const response = await window.gapi.client.keep.notes.list();
            console.log("Notes:", response.result);
        } catch (err) {
            console.error("Error fetching notes", err);
        }
    };

    return <div>ListProvider</div>;
};

export default ListProvider;
