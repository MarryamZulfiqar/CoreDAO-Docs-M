import type {ReactNode} from 'react';
import {Redirect} from '@docusaurus/router';
import Layout from '@theme/Layout';

/**
 * Homepage — redirects to docs intro.
 * AI-readiness resources are surfaced at:
 *   /llms.txt       — doc index for AI agents
 *   /llms-full.txt  — full content for AI bulk ingestion
 *   /robots.txt     — explicit AI crawler permissions
 *   /ai.txt         — AI training and crawling permissions
 */
export default function Home(): ReactNode {
  return <Redirect to='/docs/intro' />;
}
