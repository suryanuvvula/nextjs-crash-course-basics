export default function ProductLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <div>{children}</div>
            <h2>Featured Products section</h2>
        </div>
    );
  }