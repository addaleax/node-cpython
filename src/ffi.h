#ifndef FFI_H
#define FFI_H

#include <nan.h>
extern "C" {
  #include <Python.h>
}

class FFI : public Nan::ObjectWrap {
 public:
  static void Init(v8::Local<v8::Object> exports);

 private:
  FFI();
  ~FFI();

  static void New(const Nan::FunctionCallbackInfo<v8::Value>& info);

  static void Require(const Nan::FunctionCallbackInfo<v8::Value>& info);
  static void SetPath(const Nan::FunctionCallbackInfo<v8::Value>& info);
  static void Run(const Nan::FunctionCallbackInfo<v8::Value>& info);
  static const char* _ToCString(v8::Local<v8::Value> Str);


  static Nan::Persistent<v8::Function> constructor;
  static wchar_t *program;
};

#endif
