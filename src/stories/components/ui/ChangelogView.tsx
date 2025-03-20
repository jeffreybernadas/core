import React, { useState } from "react";
import { Table, Tag, Card, CardTitle, CardContent, List } from ".";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/shadcn/select";
import {
  changelogGroups,
  versionTypes,
  ChangelogEntry,
} from "../../data/changelog";

interface TableColumn<T> {
  key: keyof T | string;
  header: React.ReactNode;
  render?: (value: unknown, row: T, index: number) => React.ReactNode;
}

type ChangelogEntryAsRecord = ChangelogEntry & Record<string, unknown>;

export const ChangelogView: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState(
    changelogGroups.find((g) => !g.hidden)?.value,
  );
  const selectedGroup = changelogGroups.find(
    (g) => g.value === selectedVersion,
  );

  const columns: TableColumn<ChangelogEntryAsRecord>[] = [
    { key: "version", header: "Version" },
    { key: "date", header: "Date" },
    {
      key: "changes",
      header: "Changes",
      render: (_: unknown, row: ChangelogEntryAsRecord) => (
        <List items={row.changes} />
      ),
    },
    {
      key: "type",
      header: "Type",
      render: (_: unknown, row: ChangelogEntryAsRecord) => (
        <Tag variant={row.type.toLowerCase() as "major" | "minor" | "patch"}>
          {row.type}
        </Tag>
      ),
    },
  ];

  return (
    <div className="sb-container">
      <div className="sb-section-title">
        <h1>Changelog</h1>
      </div>

      <div className="sb-section">
        <div className="sb-section-subtitle">
          <h2>Version Types</h2>
        </div>
        <div className="sb-version-types">
          {versionTypes.map((versionType) => (
            <Card key={versionType.type}>
              <Tag
                variant={
                  versionType.type.toLowerCase() as "major" | "minor" | "patch"
                }
              >
                {versionType.type}
              </Tag>
              <CardContent>
                <p className="mt-2">{versionType.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="sb-section-subtitle">
          <h2>Release History</h2>
        </div>

        <div className="sb-version-select">
          <Select value={selectedVersion} onValueChange={setSelectedVersion}>
            <SelectTrigger className="w-[180px] bg-[#F8F8F8] dark:bg-[#011627]">
              <SelectValue placeholder="Select version" />
            </SelectTrigger>
            <SelectContent>
              {changelogGroups
                .filter((group) => !group.hidden)
                .map((group) => (
                  <SelectItem key={group.value} value={group.value}>
                    {group.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div className="sb-changelog">
          {selectedGroup && (
            <Table
              columns={columns}
              data={
                selectedGroup.entries as unknown as ChangelogEntryAsRecord[]
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};
