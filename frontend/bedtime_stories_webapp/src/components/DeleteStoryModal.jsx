import React from "react";
import { Modal, Button, Text } from "@mantine/core";

export default function DeleteStoryModal({ opened, onClose, onConfirm, storyTitle }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Confirm Deletion"
      centered
    >
      <Text>Are you sure you want to delete the story "{storyTitle}"?</Text>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
        <Button variant="default" onClick={onClose} style={{ marginRight: "8px" }}>
          Cancel
        </Button>
        <Button color="red" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  );
}
