import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import * as React from 'react';

interface HeaderProps {
  sections: ReadonlyArray<{
    name: string;
    path: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}>
          {title}
        </Typography>
        <Button variant="outlined" size="small">
          Buy me a coffee
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-evenly', overflowX: 'auto' }}>
        {sections.map((section) => (
          <Link
            color="inherit"
            key={section.name}
            href={section.path}
            // sx={{ p: 1, flexShrink: 0 }}
          >
            {section.name}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
