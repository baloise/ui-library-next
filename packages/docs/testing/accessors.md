# Accessors

## CheckboxAccessor

CheckboxAccessor is a helper object for E-2-E testing. It maps the checkbox behaviour to the `bal-checkbox` ui component.


<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="click">
                <a href="#/testing/accessors?id=click" data-id="click" class="anchor">
                    <span>click</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td>Clicks the checkbox and set checked to true</td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>click(options?: Partial<Cypress.ClickOptions>)</code></td>
    </tr>
  </tbody>
</table>

<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="check">
                <a href="#/testing/accessors?id=check" data-id="check" class="anchor">
                    <span>check</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td>Clicks the checkbox and set checked to true</td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>check(options?: Partial<Cypress.CheckOptions>)</code></td>
    </tr>
  </tbody>
</table>

<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="assertIsChecked">
                <a href="#/testing/accessors?id=assertIsChecked" data-id="assertIsChecked" class="anchor">
                    <span>assertIsChecked</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td>Assert if the checkbox is checked</td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>assertIsChecked(shouldBeChecked: boolean = true)</code></td>
    </tr>
  </tbody>
</table>

<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="assertIsDisabled">
                <a href="#/testing/accessors?id=assertIsDisabled" data-id="assertIsDisabled" class="anchor">
                    <span>assertIsDisabled</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td>Assert if the checkbox is disabled</td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>assertIsDisabled()</code></td>
    </tr>
  </tbody>
</table>

<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="assertIsEnabled">
                <a href="#/testing/accessors?id=assertIsEnabled" data-id="assertIsEnabled" class="anchor">
                    <span>assertIsEnabled</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td>Assert if the checkbox is enabled and not disabled</td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>assertIsEnabled()</code></td>
    </tr>
  </tbody>
</table>

<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="contains">
                <a href="#/testing/accessors?id=contains" data-id="contains" class="anchor">
                    <span>contains</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td>Check the content of the label element</td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>contains(content: string)</code></td>
    </tr>
  </tbody>
</table>

<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="assertExists">
                <a href="#/testing/accessors?id=assertExists" data-id="assertExists" class="anchor">
                    <span>assertExists</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td></td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>assertExists()</code></td>
    </tr>
  </tbody>
</table>

<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="assertNotExists">
                <a href="#/testing/accessors?id=assertNotExists" data-id="assertNotExists" class="anchor">
                    <span>assertNotExists</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td></td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>assertNotExists()</code></td>
    </tr>
  </tbody>
</table>

<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="assertVisible">
                <a href="#/testing/accessors?id=assertVisible" data-id="assertVisible" class="anchor">
                    <span>assertVisible</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td></td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>assertVisible()</code></td>
    </tr>
  </tbody>
</table>

<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="assertNotVisible">
                <a href="#/testing/accessors?id=assertNotVisible" data-id="assertNotVisible" class="anchor">
                    <span>assertNotVisible</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td></td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>assertNotVisible()</code></td>
    </tr>
  </tbody>
</table>

<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="selectNth">
                <a href="#/testing/accessors?id=selectNth" data-id="selectNth" class="anchor">
                    <span>selectNth</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td></td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>selectNth(index: number)</code></td>
    </tr>
  </tbody>
</table>

<table style="width:100%; display: inline-table;">
<tbody>
    <tr style="background: #f8f8f8">
        <th colspan="2" style="text-align: left" style="width:100%">
            <h3 id="should">
                <a href="#/testing/accessors?id=should" data-id="should" class="anchor">
                    <span>should</span>
                </a>
            </h3>
        </th>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Description</b></td>
        <td></td>
    </tr>
    <tr style="background: #fff">
        <td width="120px"><b>Signature</b></td>
        <td><code>should(chainers: string, attribute?: string, content?: string)</code></td>
    </tr>
  </tbody>
</table>