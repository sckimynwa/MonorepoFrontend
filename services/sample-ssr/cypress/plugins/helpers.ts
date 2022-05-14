import axios from 'axios';

function isCypressRunResult(
  results:
    | CypressCommandLine.CypressRunResult
    | CypressCommandLine.CypressFailedRunResult
): results is CypressCommandLine.CypressRunResult {
  return (results as CypressCommandLine.CypressRunResult).runs !== undefined;
}

export const sendMessage = async (
  results:
    | CypressCommandLine.CypressRunResult
    | CypressCommandLine.CypressFailedRunResult
) => {
  /**
   * Format Message
   */
  if (!isCypressRunResult(results)) return;

  const { GIT_SHA } = process.env;
  const { REPO_ACCESS_TOKEN } = process.env;
  const runs = results.runs[0];
  const { stats, tests } = runs;

  /**
   * Skip Message When All Test Succeed
   */
  if (stats.failures === 0) return;

  let statMsg = '## Failed Test Results\n\n';
  statMsg += '| Total Tests 🎖 | Passes 🟢 | Skipped 🟠 | Failures 🔴 |\n';
  statMsg +=
    '| :-----------------: | :----------------: | :----------------: | :----------------: |\n';
  statMsg += `| ${stats.tests} | ${stats.passes} | ${stats.skipped} | ${stats.failures} |\n\n`;
  statMsg += `### Details \n`;

  /**
   * Detailed Feedback on Failed Test Attempts
   */
  tests
    .filter((test) => test.state === 'failed')
    .forEach((test) => {
      statMsg += `- [ ] ${test.title.join(' > ')}\n`;
    });

  const url = `https://api.github.com/repos/mathpresso/qanda-frontend/commits/${GIT_SHA}/comments`;

  await axios.post(
    url,
    { body: statMsg },
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${REPO_ACCESS_TOKEN}`,
      },
    }
  );
};
