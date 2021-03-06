// @generated
/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PipelineRunStatus, StepKind } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: RunRootQuery
// ====================================================

export interface RunRootQuery_pipelineRunOrError_PipelineRunNotFoundError {
  __typename: "PipelineRunNotFoundError" | "PythonError";
}

export interface RunRootQuery_pipelineRunOrError_PipelineRun_pipeline {
  __typename: "PipelineSnapshot" | "UnknownPipeline";
  name: string;
  solidSelection: string[] | null;
}

export interface RunRootQuery_pipelineRunOrError_PipelineRun_tags {
  __typename: "PipelineTag";
  key: string;
  value: string;
}

export interface RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan_steps_inputs_dependsOn_outputs_type {
  __typename: "RegularDagsterType" | "ListDagsterType" | "NullableDagsterType";
  name: string | null;
}

export interface RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan_steps_inputs_dependsOn_outputs {
  __typename: "ExecutionStepOutput";
  name: string;
  type: RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan_steps_inputs_dependsOn_outputs_type;
}

export interface RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan_steps_inputs_dependsOn {
  __typename: "ExecutionStep";
  key: string;
  outputs: RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan_steps_inputs_dependsOn_outputs[];
}

export interface RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan_steps_inputs {
  __typename: "ExecutionStepInput";
  dependsOn: RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan_steps_inputs_dependsOn[];
}

export interface RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan_steps {
  __typename: "ExecutionStep";
  key: string;
  inputs: RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan_steps_inputs[];
  kind: StepKind;
}

export interface RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan {
  __typename: "ExecutionPlan";
  steps: RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan_steps[];
  artifactsPersisted: boolean;
}

export interface RunRootQuery_pipelineRunOrError_PipelineRun {
  __typename: "PipelineRun";
  pipeline: RunRootQuery_pipelineRunOrError_PipelineRun_pipeline;
  runId: string;
  status: PipelineRunStatus;
  runConfigYaml: string;
  canTerminate: boolean;
  mode: string;
  tags: RunRootQuery_pipelineRunOrError_PipelineRun_tags[];
  rootRunId: string | null;
  parentRunId: string | null;
  executionPlan: RunRootQuery_pipelineRunOrError_PipelineRun_executionPlan | null;
  stepKeysToExecute: string[] | null;
}

export type RunRootQuery_pipelineRunOrError = RunRootQuery_pipelineRunOrError_PipelineRunNotFoundError | RunRootQuery_pipelineRunOrError_PipelineRun;

export interface RunRootQuery_instance {
  __typename: "Instance";
  assetsSupported: boolean;
}

export interface RunRootQuery {
  pipelineRunOrError: RunRootQuery_pipelineRunOrError;
  instance: RunRootQuery_instance;
}

export interface RunRootQueryVariables {
  runId: string;
}
