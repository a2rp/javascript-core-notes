// variablesDataTypes/styled.js
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
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.65;
            color: var(--color-text-secondary);
        }

        .code {
            margin-top: 10px;
            padding: 12px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            font-size: 13px;
            line-height: 1.6;
            overflow-x: auto;
            color: var(--color-text-secondary);
        }

        .miniGrid {
            margin-top: 10px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 10px;
        }

        .chip {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 8px 12px;
            font-size: 13px;
            color: var(--color-text-secondary);
            text-align: center;
        }

        .note {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            align-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
        }

        .noteIcon {
            color: var(--color-primary);
            display: grid;
            place-items: center;
        }

        .noteText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.5;
        }

        .note2 {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            align-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 14px;
            padding: 10px 12px;
        }

        .noteIcon2 {
            color: var(--color-warning);
            display: grid;
            place-items: center;
        }

        .noteText2 {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.5;
        }

        .footer {
            padding: 16px;
            background: var(--color-surface-2);
            border-top: 1px solid var(--color-border);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
        }

        .footerList {
            margin: 0;
            padding-left: 0;
            list-style: none;
            display: grid;
            gap: 8px;
            color: var(--color-text-secondary);
            font-size: 13px;
        }
    `,
};
