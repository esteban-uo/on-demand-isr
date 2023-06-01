import 'server-only'


export async function readPosts() {
    const issues = await createGitHubRequest('/repos/esteban-uo/on-demand-isr/issues')
    return issues.json()
}

function createGitHubRequest(path, opts = {}) {
    return fetch(`https://api.github.com${path}`, {
      ...opts,
      headers: {
        ...opts.headers,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }
  