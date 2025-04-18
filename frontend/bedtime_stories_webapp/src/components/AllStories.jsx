import { Card, Text, Group, ActionIcon, Stack, Title, Divider } from "@mantine/core";
import { FiDownload, FiStar, FiUpload } from "react-icons/fi";

export default function AllStories({ stories }) {
  if (!stories || stories.length === 0) {
    return <Text align="center" color="dimmed">No stories available</Text>;
  }

  return (
    <Stack spacing="md">
      <Group position="apart">
        <Title order={3}>All Stories</Title>
        <Group position="right">
          <ActionIcon variant="filled" color="blue">
            <FiDownload size={18} />
          </ActionIcon>
          <ActionIcon variant="filled" color="blue">
            <FiUpload size={18} />
          </ActionIcon>
        </Group>
      </Group>

      <Divider />
      <div className="stories-list" style={{ backgroundColor: "#F9ECCC" }}>
        {stories.map((story) => (
          <div key={story.id} className="story-item" style={{ marginBottom: "16px" }} align="flex-start">
            <ActionIcon variant="subtle" color="yellow">
              <FiStar size={18} />
            </ActionIcon>
            <div style={{ flex: 1 }}>
              <Text weight={600} style={{ color: "black", textAlign: "left", paddingLeft: "16px" }}>{story.title}</Text>
              <Text size="sm" style={{ color: "black", textAlign: "left", paddingLeft: "16px" }} mt="xs">{story.exposition}</Text>
            </div>
          </div>
        ))}
      </div>
    </Stack>
  );
}
