'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  // ----- initial setup -----
  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'op-nhom1demo:expand': () => this.expand()
    }));
  },

  // ----- setup when run command on command palette -----
  // spacing is kinda broken since insertText() takes exactly spacing in here
  expand() {
    console.log('Owo');
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      const selection = editor.getSelectedText()
      console.log(selection);
      switch (selection) {
        // ----- snippet for op-nhom1demo -----
        case "op-nhom1demo":
          editor.insertText(`Hello! This is Nhom 1 !`)
          break;
        // ----- snippet for html_helloworld -----
        case "html_helloworld":
          editor.insertText(`<!DOCTYPE html>
<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <p>This is an example of a simple HTML page with one paragraph.</p>
    </body>
</html>`)
          break;
        // ----- snippet for cpp_helloworld -----
        case "cpp_helloworld":
          editor.insertText(`// Your First C++ Program
#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}`)
          break;
        // ----- snippet for verilog -----
        case "verilog":
          editor.insertText(`module tutorial_led_blink
  (
   i_clock,
   i_enable,
   i_switch_1,
   i_switch_2,
   o_led_drive
   );

  input i_clock;
  input i_enable;
  input i_switch_1;
  input i_switch_2;
  output o_led_drive;

  // Constants (parameters) to create the frequencies needed:
  // Input clock is 25 kHz, chosen arbitrarily.
  // Formula is: (25 kHz / 100 Hz * 50% duty cycle)
  // So for 100 Hz: 25,000 / 100 * 0.5 = 125
  parameter c_CNT_100HZ = 125;
  parameter c_CNT_50HZ  = 250;
  parameter c_CNT_10HZ  = 1250;
  parameter c_CNT_1HZ   = 12500;

  // These signals will be the counters:
  reg [31:0] r_CNT_100HZ = 0;
  reg [31:0] r_CNT_50HZ = 0;
  reg [31:0] r_CNT_10HZ = 0;
  reg [31:0] r_CNT_1HZ = 0;

  // These signals will toggle at the frequencies needed:
  reg        r_TOGGLE_100HZ = 1'b0;
  reg        r_TOGGLE_50HZ  = 1'b0;
  reg        r_TOGGLE_10HZ  = 1'b0;
  reg        r_TOGGLE_1HZ   = 1'b0;

  // One bit select
  reg        r_LED_SELECT;
  wire       w_LED_SELECT;


begin

  // All always blocks toggle a specific signal at a different frequency.
  // They all run continuously even if the switches are
  // not selecting their particular output.

  always @ (posedge i_clock)
    begin
      if (r_CNT_100HZ == c_CNT_100HZ-1) // -1, since counter starts at 0
        begin
          r_TOGGLE_100HZ <= !r_TOGGLE_100HZ;
          r_CNT_100HZ    <= 0;
        end
      else
        r_CNT_100HZ <= r_CNT_100HZ + 1;
    end


  always @ (posedge i_clock)
    begin
      if (r_CNT_50HZ == c_CNT_50HZ-1) // -1, since counter starts at 0
        begin
          r_TOGGLE_50HZ <= !r_TOGGLE_50HZ;
          r_CNT_50HZ    <= 0;
        end
      else
        r_CNT_50HZ <= r_CNT_50HZ + 1;
    end


  always @ (posedge i_clock)
    begin
      if (r_CNT_10HZ == c_CNT_10HZ-1) // -1, since counter starts at 0
        begin
          r_TOGGLE_10HZ <= !r_TOGGLE_10HZ;
          r_CNT_10HZ    <= 0;
        end
      else
        r_CNT_10HZ <= r_CNT_10HZ + 1;
    end


  always @ (posedge i_clock)
    begin
      if (r_CNT_1HZ == c_CNT_1HZ-1) // -1, since counter starts at 0
        begin
          r_TOGGLE_1HZ <= !r_TOGGLE_1HZ;
          r_CNT_1HZ    <= 0;
        end
      else
        r_CNT_1HZ <= r_CNT_1HZ + 1;
    end

  // Create a multiplexer based on switch inputs
  always @ (*)
  begin
    case ({i_switch_1, i_switch_2}) // Concatenation Operator { }
      2'b11 : r_LED_SELECT <= r_TOGGLE_1HZ;
      2'b10 : r_LED_SELECT <= r_TOGGLE_10HZ;
      2'b01 : r_LED_SELECT <= r_TOGGLE_50HZ;
      2'b00 : r_LED_SELECT <= r_TOGGLE_100HZ;
    endcase
  end

  assign o_led_drive = r_LED_SELECT & i_enable;

  // Alternative way to design multiplexer (same as above):
  // More compact, but harder to read, especially to those new to Verilog
  // assign w_LED_SELECT = i_switch_1 ? (i_switch_2 ? r_TOGGLE_1HZ : r_TOGGLE_10HZ) :
                                        (i_switch_2 ? r_TOGGLE_50HZ : r_TOGGLE_100HZ);
  // assign o_led_drive = w_LED_SELECT & i_enable;


end

endmodule`)
          break;
        default:

      }


    }
  }

};
