import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders with text", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole("button", { name: /test button/i })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(
      <Button variant="secondary" onClick={onClick}>
        Action
      </Button>
    );

    await user.click(screen.getByRole("button", { name: /action/i }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
