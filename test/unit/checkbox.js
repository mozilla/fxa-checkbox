/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Additional modifications of this Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

describe('MaterialCheckbox', function () {

  function createCheckbox() {
    var label = document.createElement('label'),
      input = document.createElement('input'),
      labelText = document.createElement('span');
    label.for = 'testCheckbox';
    label.className = 'fxa-checkbox fxa-js-checkbox';
    input.type = 'checkbox';
    input.id = 'testCheckbox';
    input.className = 'fxa-checkbox__input';
    label.appendChild(input);
    labelText.className = 'fxa-checkbox__label';
    labelText.text = 'Test Checkbox';
    label.appendChild(labelText);
    return label;
  }

  it('should be globally available', function (done) {
    require(['../checkbox.js'], function(FxaCheckbox) {
      var el = createCheckbox();
      var check = new FxaCheckbox(el);
      check.init();
      expect(el.className).to.equal('fxa-checkbox fxa-js-checkbox is-upgraded');
      done();
    });
  });

});
