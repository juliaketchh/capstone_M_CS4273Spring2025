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
        <Group>
          <ActionIcon variant="filled" color="blue">
            <FiDownload size={18} />
          </ActionIcon>
          <ActionIcon variant="filled" color="blue">
            <FiUpload size={18} />
          </ActionIcon>
        </Group>
      </Group>

      <Divider />

      {stories.map((story) => (
        <Card
          key={story.id}
          shadow="sm"
          p="md"
          radius="md"
          withBorder
          sx={(theme) => ({
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.02)" },
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
          })}
        >
          <Group position="apart">
            <Text weight={600}>{story.title}</Text>
            <ActionIcon variant="subtle" color="yellow">
              <FiStar size={18} />
            </ActionIcon>
          </Group>
          <Text size="sm" color="dimmed" mt="xs">{story.exposition}</Text>
        </Card>
      ))}
    </Stack>
  );
}
