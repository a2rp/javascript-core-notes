// bestPractices/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
            letter-spacing: 0.2px;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .section {
            padding: 16px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .list {
            list-style: none;
            padding-left: 0;
            margin-top: 12px;
            display: grid;
            gap: 10px;
        }

        .list li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .tip {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .tipIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .tipText {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }
    `,
};
