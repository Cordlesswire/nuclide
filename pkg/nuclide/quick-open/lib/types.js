'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

export type quickopen$ProviderSpec = {
  action?: string;
  debounceDelay?: number;
  name: string;
  prompt?: string;
  title: string;
}

import type {Dispatcher} from 'flux';
export type quickopen$Dispatcher = Dispatcher;