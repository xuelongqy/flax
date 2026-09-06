import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import GithubSlugger from 'github-slugger';
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();
const ignoredDirectories = new Set([
  '.git',
  '.dart_tool',
  '.fvm',
  'node_modules',
  '.pnpm-store',
  '.cache',
  '.local',
  'build',
  'dist',
  'coverage',
]);

async function findDocuments(directory) {
  const documents = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory() && !ignoredDirectories.has(entry.name)) {
      documents.push(...(await findDocuments(target)));
    } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.md') {
      documents.push(target);
    }
  }
  return documents.sort();
}

function headingText(tokens) {
  return tokens
    .map((token) => {
      if (token.children) return headingText(token.children);
      if (token.type === 'text' || token.type === 'code_inline') return token.content;
      if (token.type === 'softbreak' || token.type === 'hardbreak') return ' ';
      return '';
    })
    .join('');
}

function parseDocument(source) {
  const tokens = markdown.parse(source, {});
  const slugger = new GithubSlugger();
  const anchors = new Set();
  const links = [];
  for (let index = 0; index < tokens.length; index += 1) {
    if (tokens[index].type === 'heading_open') {
      anchors.add(slugger.slug(headingText(tokens[index + 1].children ?? [])));
    }
  }
  function collectLinks(children) {
    for (const token of children) {
      if (token.type === 'link_open') links.push(token.attrGet('href'));
      if (token.type === 'image') links.push(token.attrGet('src'));
      if (token.children) collectLinks(token.children);
    }
  }
  collectLinks(tokens);
  return { anchors, links };
}

export async function checkDocumentation(root = process.cwd()) {
  root = path.resolve(root);
  const documents = await findDocuments(root);
  const parsed = new Map();
  const errors = [];
  let linkCount = 0;
  async function getDocument(file) {
    if (!parsed.has(file)) {
      parsed.set(file, parseDocument(await readFile(file, 'utf8')));
    }
    return parsed.get(file);
  }
  for (const file of documents) {
    const document = await getDocument(file);
    for (const link of document.links) {
      if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(link)) continue;
      linkCount += 1;
      const report = (message) =>
        errors.push(`${path.relative(root, file)}: ${link} (${message})`);
      let targetPath;
      let fragment;
      try {
        const hash = link.indexOf('#');
        const location = hash < 0 ? link : link.slice(0, hash);
        targetPath = decodeURIComponent(location.split('?')[0]);
        fragment = hash < 0 ? '' : decodeURIComponent(link.slice(hash + 1));
      } catch {
        report('invalid URL encoding');
        continue;
      }
      const target = targetPath
        ? targetPath.startsWith('/')
          ? path.resolve(root, `.${targetPath}`)
          : path.resolve(path.dirname(file), targetPath)
        : file;
      const relative = path.relative(root, target);
      if (
        relative === '..' ||
        relative.startsWith(`..${path.sep}`) ||
        path.isAbsolute(relative)
      ) {
        report('target is outside the repository');
        continue;
      }
      let targetStat;
      try {
        targetStat = await stat(target);
      } catch (error) {
        if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') throw error;
        report('target does not exist');
        continue;
      }
      if (
        fragment &&
        targetStat.isFile() &&
        path.extname(target).toLowerCase() === '.md'
      ) {
        if (!(await getDocument(target)).anchors.has(fragment)) {
          report('heading anchor does not exist');
        }
      }
    }
  }
  return { documentCount: documents.length, linkCount, errors };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
) {
  try {
    const result = await checkDocumentation();
    if (result.errors.length > 0) {
      for (const error of result.errors) console.error(error);
      process.exitCode = 1;
    } else {
      console.log(
        `Checked ${result.linkCount} local links in ${result.documentCount} Markdown files.`,
      );
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
