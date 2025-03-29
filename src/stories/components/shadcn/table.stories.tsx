import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/shadcn/table";
import { ThemeProvider } from "../../../themes/shadcn";
import { Checkbox } from "../../../components/shadcn/checkbox";
import { Button } from "../../../components/shadcn/button";
import { Input } from "../../../components/shadcn/input";
import { Badge } from "../../../components/shadcn/badge";
import { MoreHorizontal, ArrowUpDown, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/shadcn/dropdown-menu";

type TableProps = React.ComponentProps<typeof Table>;

/**
 * A responsive table component.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/table) for more information.
 */
const meta = {
  title: "Components/Shadcn/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    children: {
      control: false,
      description: "The content of the table",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-[70vw] max-w-4xl">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for invoices
const invoices = [
  {
    id: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    id: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    id: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    id: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    id: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

// Sample data for users
const users = [
  {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "u2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: "u3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: "u4",
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: "u5",
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "User",
    status: "Pending",
  },
];

/**
 * Default table with caption, header, body, and footer.
 */
export const Default: StoryObj<TableProps> = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,250.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

/**
 * Table with selectable rows using checkboxes.
 */
export const SelectableRows: Story = {
  render: function SelectableRowsTable() {
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

    const toggleRow = (id: string) => {
      setSelectedRows((prev) =>
        prev.includes(id)
          ? prev.filter((rowId) => rowId !== id)
          : [...prev, id],
      );
    };

    const toggleAll = () => {
      setSelectedRows((prev) =>
        prev.length === users.length ? [] : users.map((user) => user.id),
      );
    };

    return (
      <div className="space-y-4">
        <div className="flex justify-between">
          <div>
            {selectedRows.length > 0 && (
              <p className="text-sm text-muted-foreground">
                {selectedRows.length} row(s) selected
              </p>
            )}
          </div>
          <div>
            {selectedRows.length > 0 && (
              <Button variant="outline" size="sm">
                Delete Selected
              </Button>
            )}
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedRows.length === users.length}
                  onCheckedChange={toggleAll}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(user.id)}
                    onCheckedChange={() => toggleRow(user.id)}
                    aria-label={`Select ${user.name}`}
                  />
                </TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.status === "Active"
                        ? "default"
                        : user.status === "Inactive"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit user</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        Delete user
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

/**
 * Table with sortable columns.
 */
export const SortableColumns: Story = {
  render: function SortableColumnsTable() {
    const [sortColumn, setSortColumn] = React.useState<string | null>("name");
    const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
      "asc",
    );
    const [data, setData] = React.useState([...users]);

    const handleSort = (column: string) => {
      if (sortColumn === column) {
        // Toggle direction if same column
        const newDirection = sortDirection === "asc" ? "desc" : "asc";
        setSortDirection(newDirection);
        setData([...data].reverse());
      } else {
        // Sort by new column
        setSortColumn(column);
        setSortDirection("asc");
        setData(
          [...data].sort((a, b) => {
            if (a[column as keyof typeof a] < b[column as keyof typeof b]) {
              return -1;
            }
            if (a[column as keyof typeof a] > b[column as keyof typeof b]) {
              return 1;
            }
            return 0;
          }),
        );
      }
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("name")}
            >
              <div className="flex items-center">
                Name
                {sortColumn === "name" && (
                  <ArrowUpDown
                    className={`ml-2 h-4 w-4 ${
                      sortDirection === "desc" ? "rotate-180" : ""
                    } transition-transform`}
                  />
                )}
              </div>
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("email")}
            >
              <div className="flex items-center">
                Email
                {sortColumn === "email" && (
                  <ArrowUpDown
                    className={`ml-2 h-4 w-4 ${
                      sortDirection === "desc" ? "rotate-180" : ""
                    } transition-transform`}
                  />
                )}
              </div>
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("role")}
            >
              <div className="flex items-center">
                Role
                {sortColumn === "role" && (
                  <ArrowUpDown
                    className={`ml-2 h-4 w-4 ${
                      sortDirection === "desc" ? "rotate-180" : ""
                    } transition-transform`}
                  />
                )}
              </div>
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("status")}
            >
              <div className="flex items-center">
                Status
                {sortColumn === "status" && (
                  <ArrowUpDown
                    className={`ml-2 h-4 w-4 ${
                      sortDirection === "desc" ? "rotate-180" : ""
                    } transition-transform`}
                  />
                )}
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.status === "Active"
                      ? "default"
                      : user.status === "Inactive"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {user.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

/**
 * Table with search and filter functionality.
 */
export const SearchAndFilter: Story = {
  render: function SearchAndFilterTable() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [roleFilter, setRoleFilter] = React.useState<string | null>(null);
    const [filteredData, setFilteredData] = React.useState([...users]);

    React.useEffect(() => {
      let result = [...users];

      // Apply search
      if (searchTerm) {
        result = result.filter(
          (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      }

      // Apply role filter
      if (roleFilter) {
        result = result.filter((user) => user.role === roleFilter);
      }

      setFilteredData(result);
    }, [searchTerm, roleFilter]);

    const roles = Array.from(new Set(users.map((user) => user.role)));

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Input
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {roleFilter || "All Roles"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setRoleFilter(null)}>
                All Roles
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {roles.map((role) => (
                <DropdownMenuItem
                  key={role}
                  onClick={() => setRoleFilter(role)}
                >
                  {role}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "Active"
                          ? "default"
                          : user.status === "Inactive"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  },
};

/**
 * Table with expandable rows.
 */
export const ExpandableRows: Story = {
  render: function ExpandableRowsTable() {
    const [expandedRows, setExpandedRows] = React.useState<string[]>([]);

    const toggleRow = (id: string) => {
      setExpandedRows((prev) =>
        prev.includes(id)
          ? prev.filter((rowId) => rowId !== id)
          : [...prev, id],
      );
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <React.Fragment key={user.id}>
              <TableRow>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleRow(user.id)}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedRows.includes(user.id) ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.status === "Active"
                        ? "default"
                        : user.status === "Inactive"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
              {expandedRows.includes(user.id) && (
                <TableRow className="bg-muted/50">
                  <TableCell colSpan={5} className="p-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">User Details</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">User ID</p>
                          <p className="text-sm text-muted-foreground">
                            {user.id}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Last Login</p>
                          <p className="text-sm text-muted-foreground">
                            2 days ago
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Created At</p>
                          <p className="text-sm text-muted-foreground">
                            Jan 12, 2023
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Updated At</p>
                          <p className="text-sm text-muted-foreground">
                            Mar 5, 2023
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline">
                          Edit User
                        </Button>
                        <Button size="sm" variant="outline">
                          View Activity
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    );
  },
};
