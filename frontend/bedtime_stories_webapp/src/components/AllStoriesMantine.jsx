import React, { useState } from "react";
import { ActionIcon, Group, Menu, Table, Text } from "@mantine/core";
import { IconDots, IconTrash, IconStar, IconBook } from "@tabler/icons-react";
import DeleteStoryModal from "./DeleteStoryModal";

export default function AllStories({ stories }) {
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleDeleteClick = (story) => {
    setSelectedStory(story);
    setModalOpened(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deleted story: ${selectedStory.title}`);
    setModalOpened(false);
    setSelectedStory(null);
  };

  if (!stories || stories.length === 0) {
    return <Text align="center" color="dimmed">No stories available</Text>;
  }

  const rows = stories.map((story) => (
    <Table.Tr key={story.id}>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <div style={{ color: "black", textAlign: "left", paddingLeft: "16px" }}>
            <Text fz="sm" fw={500}>
              {story.title}
            </Text>
            <Text c="dimmed" fz="xs">
              {story.exposition}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="blue" onClick={() => console.log(`Open story: ${story.title}`)}>
            <IconBook size={16} stroke={1.5} />
          </ActionIcon>
          <Menu
            transitionProps={{ transition: "pop" }}
            withArrow
            position="bottom-end"
            withinPortal
          >
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots size={16} stroke={1.5} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection={<IconTrash size={16} stroke={1.5} />} onClick={() => handleDeleteClick(story)}>
                Delete
              </Menu.Item>
              <Menu.Item leftSection={<IconStar size={16} stroke={1.5} />}>
                Favorite
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table.ScrollContainer minWidth={800} style={{ backgroundColor: "#F9ECCC" }}>
        <Table verticalSpacing="md">
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <DeleteStoryModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        onConfirm={handleConfirmDelete}
        storyTitle={selectedStory?.title}
      />
    </>
  );
}